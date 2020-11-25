import { AppDispatch } from '../store';
import task1data from './task1';
import task2data from './task2';
import task3data from './task3';
import task4data from './task4';
import task5data from './task5';
import task6data from './task6';
import task7data from './task7';
import task8data from './task8';
import task9data from './task9';

export interface TaskData {
  title: string;
  setting?: string;
  instructions?: string;
  description: string;
  screens: { [key: string]: ScreenData };
}

export type ScreenElement<T> = {
  position: { top: number | string; left: number | string };
  size: { width: number | string; height: number | string };
} & T;

export interface ScreenData {
  component: React.ReactNode;
  buttons?: ScreenElement<{
    onClick?: (dispatch: AppDispatch) => void;
  }>[];
  textFields?: ScreenElement<{
    placeholder?: string;
    type?: string;
    onChange?:(newValue:string, dispatch: AppDispatch) => void;
  }>[];
}

const gameTasks: { [taskId: string]: TaskData } = {
  1: task1data,
  2: task2data,
  3: task3data,
  4: task4data,
  5: task5data,
  6: task6data,
  7: task7data,
  8: task8data,
  9: task9data
};
export default gameTasks;
export const POINTS_WRONG_ANSWER = -30;
