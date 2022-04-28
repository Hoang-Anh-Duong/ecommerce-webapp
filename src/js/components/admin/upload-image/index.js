import { Upload, Button, Divider, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import envApp from '../../../helpers/envApp';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

const UploadImage = ({ handleCancel }) => {
    const [state, setState] = useState({
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [],
    });

    const { previewVisible, previewImage, fileList, previewTitle } = state;

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    const onCancel = () => {
        setState({ previewVisible: false });
    };

    const handleChange = ({ fileList }) => {
        setState({ fileList })
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    return (
        <>
            <div>
                <div style={{ overflow: 'auto', height: '500px' }}>
                    <Upload
                        name='image'
                        action={envApp.API + '/admin/image/upload'}
                        onChange={handleChange}
                        onPreview={handlePreview}
                        fileList={fileList}
                        listType="picture-card"
                        maxCount={10}
                        multiple
                    >
                        {uploadButton}
                    </Upload>
                    <Modal
                        visible={previewVisible}
                        title={previewTitle}
                        footer={null}
                        onCancel={onCancel}
                    >
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </div>
                <div style={{ paddingTop: 5, width: '100%', textAlign: 'end' }}>
                    <Divider style={{ margin: 3 }} />
                    <Button type='primary' onClick={handleCancel}>Cancel</Button>
                </div>
            </div>

        </>
    );

}

export default UploadImage;