import { ButtonHTMLAttributes } from 'react';

export type ButtonDefaultProps = {
  description: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;