
import { Button, Col, Divider, Form, Row, Switch } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ListImage from '../../../../components/admin/list-image';
import UploadImageModal from "../../../../components/admin/modal/upload-image-modal";
import imageService from '../../../../services/admin/image.service';
import productService from '../../../../services/admin/product.service';
import FormCategoryProduct from './caterory-product';
import FormInfoProduct from './info-product';
import FormPromotion from './promotion-product';

let promotionId = null;

const AddProduct = () => {
    let { id } = useParams();
    
    const [pageState, setPageState] = useState({
        createState: true,
        title: "Create Product",
        buttonSumit: "Save product"
    });
    const [form] = Form.useForm();
    const [formCategory] = Form.useForm();
    const [formPromotion] = Form.useForm();
    const [category, setCategory] = useState(0);
    const [mainImage, setMainImage] = useState([]);
    const [extendImage, setExtendImage] = useState([]);
    const [isPromotion, setIsPromotion] = useState(false);

    const getMainImage = (images) => {
        setMainImage(images)
    }

    const getExtendImage = (images) => {
        setExtendImage(images)
    }

    useEffect(() => {
        if (id) {
            setPageState({
                createState: false,
                title: "Update Product",
                buttonSumit: "Update product"
            })
        }
        getProductId(id);
    }, [])

    const getProductId = (id) => {
        if (id) {
            productService.getProductId(id,
                (res) => {
                    fillDataToForm(res);
                }
            )
        }
    }

    const clearForm = () => {
        form.resetFields();
        formCategory.resetFields();
        formPromotion.resetFields();
        setExtendImage([]);
        setMainImage([]);
    }

    const fillDataToForm = (data) => {
        const { name, descript, price, total, imageBg, images, Category, promotions } = data;
        form.setFieldsValue({
            name: name,
            descript: descript,
            price: price,
            total: total,
        });
        setCategory(Category?.id);
        if (promotions.length) {
            const promotion = promotions[0];
            setIsPromotion(true);
            promotionId = promotion.id;
            console.log(promotionId)
            formPromotion.setFieldsValue({
                dateSale: [moment(promotion.startSale), moment(promotion.endSale)],
                percentSale: promotion.percentSale,
                priceSale: promotion.priceSale,
            });
        }
        getMainImages(imageBg);
        getExtendImages(images);
    }

    const getMainImages = (imageIds) => {
        imageService.getImageByIds(imageIds,
            (res) => {
                setMainImage(res);
            }
        )
    }

    const getExtendImages = (imageIds) => {
        imageService.getImageByIds(imageIds,
            (res) => {
                setExtendImage(res);
            }
        )
    }

    const onFinish = async () => {
        await form.validateFields(['name', 'total', 'price']);
        if (isPromotion) {
            await formPromotion.validateFields(['dateSale', 'priceSale', 'percentSale'])
        }
        submit();
    }

    const submit = () => {
        const price = form.getFieldValue('price');
        let priceSale = formPromotion.getFieldValue('priceSale');
        let percentSale = formPromotion.getFieldValue('percentSale');
        let promotion = null;
        if (isPromotion) {
            console.log(priceSale)
            if (priceSale) {
                percentSale = Math.round(100 - (priceSale / price) * 100);
            } else if (percentSale) {
                priceSale = Math.round(price * (100 - percentSale));
            }
            console.log(promotionId)
            promotion = {
                id: promotionId || null,
                startSale: formPromotion.getFieldValue('dateSale')[0],
                endSale: formPromotion.getFieldValue('dateSale')[1],
                priceSale: priceSale,
                percentSale: percentSale,
            }
            console.log(promotion)
        }
        const product = {
            name: form.getFieldValue('name'),
            descript: form.getFieldValue('descript'),
            price: price,
            total: form.getFieldValue('total'),
            imageBg: mainImage[0],
            images: extendImage,
            categoryId: category,
            promotion: promotion,
        };
        if (pageState.createState) {
            productService.addProduct(product,
                (res) => {
                    clearForm();
                }
            );
        } else {
            productService.updateProduct(
                {
                    id: id,
                    product: product
                }, (res) => {
                    clearForm();
                }
            );
        }
    }

    return (
        <div>
            <h2>{pageState.title}</h2>
            <Row>
                <Col span={14} style={{ paddingRight: 5 }}>
                    <div className='blue-border' style={{ marginBottom: '10px' }}>
                        <Row
                            style={{
                                paddingBottom: 10,
                                fontWeight: 'bold'
                            }}
                        >
                            <label>INFO PRODUCT</label>
                            <Divider style={{ margin: 3 }} />
                        </Row>
                        <FormInfoProduct form={form} />
                    </div>
                    <div className='blue-border' style={{ marginBottom: '10px' }}>
                        <Row
                            style={{
                                paddingBottom: 10,
                                fontWeight: 'bold'
                            }}
                        >
                            <label>INFO PROMOTION</label>
                            <Switch
                                defaultChecked={isPromotion}
                                checked={isPromotion}
                                style={{ marginLeft: 'auto' }}
                                onChange={(checked) => {
                                    formPromotion.resetFields();
                                    setIsPromotion(checked);
                                }} />
                            <Divider style={{ margin: 3 }} />
                        </Row>
                        {isPromotion &&
                            <FormPromotion
                                formPromotion={formPromotion}
                            />
                        }
                    </div>
                    <div style={{ textAlign: 'end' }}>
                        <Button type="primary" onClick={onFinish}>{pageState.buttonSumit}</Button>
                    </div>
                </Col>
                <Col span={10} style={{ paddingLeft: 5 }}>
                    <div className='blue-border' style={{ marginBottom: 10 }}>
                        <FormCategoryProduct setCategory={setCategory} category={category} formCategory={formCategory} />
                    </div>
                    <div className='blue-border' style={{ marginBottom: 10 }}>
                        <Row
                            style={{
                                paddingBottom: 10,
                                fontWeight: 'bold'
                            }}
                        >
                            <label>MAIN IMAGE</label>
                            <Divider style={{ margin: 3 }} />
                        </Row>
                        <div>
                            {mainImage.length > 0 && <ListImage
                                listImage={mainImage}
                                height={100}
                                width={100}
                                deleteFunction={(e) => {
                                    let newlist = mainImage.filter((value) => value.id !== e);
                                    setMainImage(newlist);
                                }}
                            />}
                        </div>
                        <UploadImageModal
                            getImage={getMainImage}
                            currentImages={mainImage}
                            isMultipleSelect={false}
                        />
                    </div>
                    <div className='blue-border' style={{ marginBottom: 10 }}>
                        <Row
                            style={{
                                paddingBottom: 10,
                                fontWeight: 'bold'
                            }}
                        >
                            <label>EXTEND IMAGE</label>
                            <Divider style={{ margin: 3 }} />
                        </Row>
                        <div>
                            {extendImage.length > 0 && <ListImage
                                listImage={extendImage}
                                height={100}
                                width={100}
                                deleteFunction={(e) => {
                                    let newlist = extendImage.filter((value) => value.id !== e);
                                    setExtendImage(newlist);
                                }}
                            />}
                        </div>
                        <UploadImageModal
                            getImage={getExtendImage}
                            currentImages={extendImage}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AddProduct;