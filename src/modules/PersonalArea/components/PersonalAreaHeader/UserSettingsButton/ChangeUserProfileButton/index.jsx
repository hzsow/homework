import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'antd';
import ChangeUserProfileForm from './ChangeUserProfileForm';
import { Upload, message } from 'antd';
import {changeUserProfileLoaderSelector, changeUserProfileModalShowSelector, changeUserProfileAvatarSelector} from '../../../../selectors/PersonalAreaSelectors'
import { changeUserProfileModalHide, changeUserProfileModalShow, changeUserProfileLoader, changeUserProfileSetAvatar} from '../../../../actions/'
import {reset} from 'redux-form';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';


export const ChangeUserProfileButton = (props) => {
    const [ loading, setLoading ] = useState(false);
    const [ imageUrl, setImageUrl ] = useState(null);
    const [ imageCode, setImageCode ] = useState(null);
    const { email } = props;
    const dispatch = useDispatch();
    const visible = useSelector(changeUserProfileModalShowSelector);
    const loader = useSelector(changeUserProfileLoaderSelector);
    const avatar = useSelector(changeUserProfileAvatarSelector);
    const onCancel = () => {
        dispatch(changeUserProfileModalHide());
      }
      const onOk = (values) => {
          dispatch(changeUserProfileLoader({payload:{
            ...values,
            oldEmail: email,
            imageUrl
          }}));
          dispatch(reset('changeUserProfile'));
      }
      const onClick = () => {
        dispatch(changeUserProfileModalShow());
        dispatch(changeUserProfileSetAvatar({img: imageCode}));
    }

    const getBase64 = (img, callback) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => callback(reader.result));
      reader.readAsDataURL(img);
    }

    const beforeUpload = (file) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('Вы можете загрузить файлы только JPG/PNG формата!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('Изображение не должно превышать 2MB!');
      }
      return isJpgOrPng && isLt2M;
    }

    const handleChange = info => {
      if (info.file.status === 'uploading') {
        setLoading(true);
        return;
      }
      if (info.file.status === 'done') {
        getBase64(info.file.originFileObj, imageUrl =>{
            setLoading(false);
            setImageUrl(`${info.file.name}`);
            setImageCode(imageUrl);
          }
        );
        message.success(`${info.file.name} успешно загружен`);
      }else if (info.file.status === 'error') {
        message.error(`${info.file.name} ошибка загрузки.`);
      }
    };

    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    return(
        <div className="userSettingsModal_button">  
            <Button onClick={onClick}>Изменить профиль</Button>
            <Modal
                visible={visible}
                title="Изменить профиль"
                onCancel={onCancel}
                footer={[
                ]}
                >
                <Upload
                    name="file"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    multiple={false}
                    accept="image/jpeg,image/png"
                    action="http://localhost:8000/upload"
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                  >
                     {imageCode ? <img src={imageCode} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
                <ChangeUserProfileForm onSubmit={onOk} loader={loader}/>
            </Modal>
        </div>
    )
}