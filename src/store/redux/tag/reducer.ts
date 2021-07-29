import { TagState, TagAction } from './types';
import { createReducer } from 'typesafe-actions';

const initialState: TagState = {
  tagList: [
    { tag: 'javascript', text: 'Javascript', color: '' },
    { tag: 'typescript', text: 'Typescript', color: '' },
    { tag: 'react', text: 'React', color: '' },
    { tag: 'kubernetes', text: 'Kubernetes', color: '' },
    { tag: 'devops', text: 'DevOps', color: '' },
    { tag: 'ansible', text: 'Ansible', color: '' },
    { tag: 'progamming', text: 'Programming', color: '' },
    { tag: 'etc', text: 'Etc', color: '' },
    { tag: 'terraform', text: 'Terraform', color: '' },
    { tag: 'aws', text: 'AWS', color: '' },
    { tag: 'docker', text: 'Docker', color: '' },
    { tag: 'linux', text: 'Linux', color: '' },
    { tag: 'java', text: 'Java', color: '' },
    { tag: 'kotlin', text: 'Kotlin', color: '' },
    { tag: 'angular', text: 'Angular', color: '' },
    { tag: 'shell', text: 'Shell', color: '' },
    { tag: 'book', text: 'Book', color: '' }
  ]
};

const status = createReducer<TagState, TagAction>(initialState, {});

export default status;
