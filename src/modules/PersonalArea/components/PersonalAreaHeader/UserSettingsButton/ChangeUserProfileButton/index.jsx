import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'antd';
import ChangeUserProfileForm from './ChangeUserProfileForm';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import {changeUserProfileLoaderSelector, changeUserProfileModalShowSelector, formValueSelector} from '../../../../selectors/PersonalAreaSelectors'
import { changeUserProfileModalHide, changeUserProfileModalShow, changeUserProfileLoader} from '../../../../actions/'
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
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export const ChangeUserProfileButton = () => {
    const dispatch = useDispatch();
    const visible = useSelector(changeUserProfileModalShowSelector);
    const loader = useSelector(changeUserProfileLoaderSelector);
    const form = useSelector(formValueSelector);
    const onCancel = () => {
        dispatch(changeUserProfileModalHide());
      }
      const onOk = () => {
        const values = form.changeUserProfile.values;
        if (values)
          dispatch(changeUserProfileLoader({newFirstName: values.newFirstName, newEmail: values.newEmail}));
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
                    <Button key="back" onClick={onCancel}>
                    Отмена
                    </Button>,
                    <Button key="submit" type="button" loading={loader} onClick={onOk}>
                    Изменить профиль
                    </Button>,
                ]}
                >
                
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                    </p>
                </Dragger>
                <ChangeUserProfileForm/>
            </Modal>
        </div>
    )
}