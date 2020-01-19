import { TagState, TagAction } from "./types";
import { createReducer } from "typesafe-actions";

const initialState: TagState = {
  tagList: {
    javascript: {
      text: "Javascript"
    },
    typescript: {
      text: "Typescript"
    },
    react: {
      text: "React"
    },
    kubernetes: {
      text: "kubernetes"
    },
    devops: {
      text: "DevOps"
    },
    ansible: {
      text: "Ansible"
    },
    programming: {
      text: "Programming"
    },
    etc: {
      text: "Etc"
    },
    terraform: {
      text: "Terraform"
    },
    aws: {
      text: "AWS"
    },
    docker: {
      text: "Docker"
    },
    linux: {
      text: "linux"
    },
    java: {
      text: "Java"
    },
    kotlin: {
      text: "Kotlin"
    },
    angular: {
      text: "Angular"
    },
    shell: {
      text: "Shell"
    }
  }
};

const status = createReducer<TagState, TagAction>(initialState, {});

export default status;
