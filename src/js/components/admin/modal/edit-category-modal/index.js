import { Modal, Form, Row, Input, Divider, Col } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import imageService from '../../../../services/admin/image.service';
import tagService from '../../../../services/admin/tag.service';
import ListImage from '../../list-image';
import UploadImageModal from '../upload-image-modal';

const EditCategoryModal = ({ afterClose }, ref) => {
    useImperativeHandle(ref, () => ({
        showModal(record) {
            setCategoryId(record.id);
            getCategory(record.id);
            console.log(record.image);
            getImageCategory(record.image);
            setVisible(true);
        }
    }), []);

    const [visible, setVisible] = useState(false);
    const [imageTag, setImageTag] = useState([]);
    const [categoryId, setCategoryId] = useState();
    const [formCategory] = Form.useForm();
    const childRef = useRef();

    const handleCancel = e => {
        setVisible(false);
    };

    const handleOk = () => {
        const newCategory = {
            id: categoryId,
            name: formCategory.getFieldValue('name') || '',
            descript: formCategory.getFieldValue('descript') || null,
            image: imageTag[0],
        }
        tagService.updateCategory(newCategory,
            (res) => {
                handleCancel();
            }
        )
    };

    const getCategory = (categoryId) => {
        if (categoryId) {
            tagService.getCategoryById({ id: categoryId },
                (res) => {
                    const dataForm = {
                        name: res.name,
                        descript: res.descript,
                        totalProduct: res.totalProduct
                    }
                    formCategory.setFieldsValue(dataForm);

                    console.log(res);
                }
            )
        }
    }

    const getImage = (image) => {
        setImageTag(image);
    }

    const getImageCategory = (imageIds) => {
        imageService.getImageByIds([imageIds],
            (res) => {
                setImageTag(res);
            }
        )
    }

    return (
        <>
            <Modal
                visible={visible}
                title={'EDIT CATEGORY'}
                onCancel={handleCancel}
                onOk={handleOk}
                afterClose={afterClose}
                style={{ top: 20 }}
                bodyStyle={{ height: '625px' }}
            >
                <div style={{ position: 'relative' }}>
                    <div className='blue-border' style={{ marginBottom: 10 }}>
                        <Form
                            layout='vertical'
                            form={formCategory}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="NAME CATEGORY"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Input something!',
                                    },
                                ]}
                            >
                                <Input placeholder="input name category" />
                            </Form.Item>
                            <Row>
                                <Col span={12} style={{ paddingRight: '10px' }}>
                                    <Form.Item
                                        label="DESCRIPTION"
                                        name="descript"
                                    >
                                        <TextArea rows={9} placeholder="input description about category" />
                                    </Form.Item>
                                </Col>
                                <Col span={12} style={{ paddingLeft: '10px' }}>
                                    <Form.Item
                                        label="TOTAL PRODUCT"
                                        name={'totalProduct'}
                                    >
                                        <Input disabled />
                                    </Form.Item>
                                    <Form.Item>
                                        <div className='blue-border' style={{ marginBottom: 10 }}>
                                            <Row
                                                style={{
                                                    paddingBottom: 10
                                                }}
                                            >
                                                <label>IMAGE CATEGORY</label>
                                                <Divider style={{ margin: 3 }} />
                                            </Row>
                                            <div>
                                                {imageTag.length > 0 && <ListImage
                                                    listImage={imageTag}
                                                    height={100}
                                                    width={100}
                                                    multiple={false}
                                                    deleteFunction={(e) => {
                                                        let newlist = imageTag.filter((value) => value.id !== e);
                                                        setImageTag(newlist);
                                                    }}
                                                />}
                                            </div>
                                            <UploadImageModal
                                                ref={childRef}
                                                getImage={getImage}
                                                currentImages={imageTag}
                                                isMultipleSelect={false}
                                            />
                                        </div>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default forwardRef(EditCategoryModal);