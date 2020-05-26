import {Gender} from './Gender';

export interface ICeleb {
  id: number;
  name: string;
  title: string;
  desc: string;
  gender: Gender;
  image: string;
  birthDay: string;
}
