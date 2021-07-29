import { TagState, TagAction } from './types';
import { createReducer } from 'typesafe-actions';
import { SET_DATA } from './actions';

const initialState: TagState = {
  tagList: [
    { tagId: 'javascript', text: 'Javascript', color: '' },
    { tagId: 'typescript', text: 'Typescript', color: '' },
    { tagId: 'react', text: 'React', color: '' },
    { tagId: 'kubernetes', text: 'Kubernetes', color: '' },
    { tagId: 'devops', text: 'DevOps', color: '' },
    { tagId: 'ansible', text: 'Ansible', color: '' },
    { tagId: 'progamming', text: 'Programming', color: '' },
    { tagId: 'etc', text: 'Etc', color: '' },
    { tagId: 'terraform', text: 'Terraform', color: '' },
    { tagId: 'aws', text: 'AWS', color: '' },
    { tagId: 'docker', text: 'Docker', color: '' },
    { tagId: 'linux', text: 'Linux', color: '' },
    { tagId: 'java', text: 'Java', color: '' },
    { tagId: 'kotlin', text: 'Kotlin', color: '' },
    { tagId: 'angular', text: 'Angular', color: '' },
    { tagId: 'shell', text: 'Shell', color: '' },
    { tagId: 'book', text: 'Book', color: '' }
  ]
};

const status = createReducer<TagState, TagAction>(initialState, {
  [SET_DATA]: (state, action) => {
    const { key, value } = action.payload;
    return { ...state, [key]: value };
  }
});

export default status;
