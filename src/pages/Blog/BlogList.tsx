import React, {FC, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {BlogActionCreator} from '../../store/reducers/blog/action-creators';
import {useTypesSelector} from '../../hooks/useTypesSelector';
import {IBlog} from '../../models/IBlog';
import BlogTableItem from './components/BlogTableItem';

const BlogList: FC = () => {
  console.log('dsacxzczxxc');
  const dispatch = useDispatch();
  const {blogs, isLoading, error} = useTypesSelector((state) => state.blog);

  useEffect(() => {
    dispatch(BlogActionCreator.getAllRequest());
  }, []);

  if (isLoading) {
    return <>Loading</>;
  }
  if (error !== '') {
    return <>{error}</>;
  }

  return (
    <div>
      {blogs.map((blog: IBlog) => <BlogTableItem key={blog.id} blog={blog}/>)}
    </div>
  );
};

export default BlogList;
