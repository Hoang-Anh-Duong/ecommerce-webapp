import { Button, Checkbox, Divider, Image, Popconfirm } from 'antd';
import { useEffect, useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';

const ListImage = (props) => {
    const {
        listImage = [],
        currentImages = [],
        multiple = true,
        width = null,
        height = null,
        isSelect = false,
        isPreview = false,
        isDelete = false,
        deleteFunction = null,
        sendCheckList = null,
    } = props;
    const [checkList, setCheckList] = useState([]);

    useEffect(() => {
        console.log(multiple)
        if (currentImages.length) {
            setCheckList(currentImages.map(image => image.id.toString()));
        }
        console.log(checkList)
    }, [])

    const onChange = (e) => {
        if (multiple) {
            changeMultiple(e);
        } else {
            console.log("duong");
            changeSingle(e)
        }
    }

    const changeMultiple = (event) => {
        var updatedList = [...checkList];
        if (event.target.checked) {
            updatedList = [...checkList, event.target.value];
            console.log(updatedList)
        } else {
            updatedList.splice(checkList.indexOf(event.target.value), 1);
        }
        setCheckList(updatedList);
    }

    const changeSingle = (event) => {
        var updatedList = [];
        if (event.target.checked) {
            updatedList = [event.target.value];
            console.log(updatedList)
        } else {
            updatedList = [];
        }
        setCheckList(updatedList);
    }

    const isCheckedList = (e) => {
        for (let i = 0; i < checkList.length; i++) {
            if (+e === +checkList[i]) {
                return true;
            }
        }
        return false;
    }

    return (
        <div style={{ position: 'relative' }}>
            <div style={isSelect ? { overflow: 'auto', height: '500px' } : {}}>
                {listImage.map((item, index) =>
                    <div key={item.id}
                        style={{
                            display: "inline-grid",
                            margin: 2,
                            border: '1px solid #3bedff9c',
                            padding: 2,
                            background: '#fff7c0'
                        }}>
                        <div style={{ position: 'relative' }}>
                            {isSelect &&
                                <input value={item.id} type="checkbox" onChange={onChange} checked={isCheckedList(item.id)} />
                            }
                            {isDelete &&
                                <Popconfirm
                                    title="Are you sure？"
                                    onConfirm={() => deleteFunction(item.id)}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <Button
                                        className='customer-delete-btn'
                                        size='small'
                                        danger
                                        type='primary'
                                        style={{
                                            position: 'absolute',
                                            zIndex: 2,
                                            right: 0,
                                        }}
                                    >
                                        <DeleteOutlined />
                                    </Button>
                                </Popconfirm>
                            }
                        </div>
                        <div>
                            <Image
                                width={width}
                                height={height}
                                src={item.src}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <div className='wrap-text' style={{ textAlign: 'center', maxWidth: width }}>{item.name}</div>
                    </div>
                )}
            </div>
            {isSelect &&
                <div style={{ paddingTop: 5, width: '100%', textAlign: 'end' }}>
                    <Divider style={{ margin: 3 }} />
                    <Button type='primary'
                        onClick={() => {
                            const images = listImage.filter(image => checkList.indexOf(image.id.toString()) !== -1);
                            console.log(images);
                            sendCheckList(images);
                        }}
                    >Ok</Button>
                </div>
            }
        </div>
    )
}

export default ListImage;