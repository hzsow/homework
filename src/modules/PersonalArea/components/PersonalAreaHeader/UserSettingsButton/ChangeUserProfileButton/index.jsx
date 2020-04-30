import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'antd';
import ChangeUserProfileForm from './ChangeUserProfileForm';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import {changeUserProfileLoaderSelector, changeUserProfileModalShowSelector} from '../../../../selectors/PersonalAreaSelectors'
import { changeUserProfileModalHide, changeUserProfileModalShow, changeUserProfileLoader} from '../../../../actions/'
import {reset} from 'redux-form';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: false,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} файл загружен успешно.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} ошибка загрузки.`);
    }
  },
};

export const ChangeUserProfileButton = (props) => {
    const { email } = props;
    const dispatch = useDispatch();
    const visible = useSelector(changeUserProfileModalShowSelector);
    const loader = useSelector(changeUserProfileLoaderSelector);
    const onCancel = () => {
        dispatch(changeUserProfileModalHide());
      }
      const onOk = (values) => {
          dispatch(changeUserProfileLoader({payload:{
            ...values,
            oldEmail: email
          }}));
          dispatch(reset('changeUserProfile'));
      }
      const onClick = () => {
        dispatch(changeUserProfileModalShow());
    }
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
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Нажмите или перетащите файл для загрузки</p>
                </Dragger>
                <ChangeUserProfileForm onSubmit={onOk} loader={loader}/>
            </Modal>
        </div>
    )
}