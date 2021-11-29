import React, {FC} from 'react';
import {IBlog} from '../../../models/IBlog';

interface Props {
    blog: IBlog
}

const BlogTableItem: FC<Props> = ({blog}) => {
  return (
    <div>
      <span>{blog.id}</span>
      <span>{blog.title}</span>
      <span>{blog.description}</span>
    </div>
  );
};

export default BlogTableItem;
