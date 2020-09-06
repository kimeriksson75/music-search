import React, { useContext, useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import MusicmatchContext from '../../context/musicmatch/musicmatchContext';

const Search = () => {
  const musicmatchContext = useContext(MusicmatchContext);
  const { searchSongsByLyrics } = musicmatchContext;
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSerchType] = useState('lyrics');

  const onFinish = (values) => {
    console.log(values);
    searchSongsByLyrics(values.search);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onSearchChange = (e) => {
    setSearchValue(e.target.value);

    e.preventDefault();
  };
  const onChangeSearchType = (e) => {
    console.log(e.target.value);
    setSerchType(e.target.value);
  };
  const layout = {
    // labelCol: {
    //   span: 8,
    // },
    // wrapperCol: {
    //   span: 16,
    // },
  };
  const tailLayout = {
    // wrapperCol: {
    //   offset: 8,
    //   span: 16,
    // },
  };
  return (
    <div>
      <h1>{`Search ${searchType}`} </h1>
      <Radio.Group
        onChange={onChangeSearchType}
        value={searchType}
        style={{ marginBottom: '8px' }}
      >
        <Radio value={'lyrics'}>Lyrics</Radio>
        <Radio disabled value={'album'}>
          Album
        </Radio>
        <Radio disabled value={'artist'}>
          Artist
        </Radio>
      </Radio.Group>
      <Form
        {...layout}
        name='search'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          {...tailLayout}
          name='search'
          rules={[{ required: true, message: 'Search song by lyrics' }]}
        >
          <Input onChange={onSearchChange} type='input' />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>
            Search
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Search;
