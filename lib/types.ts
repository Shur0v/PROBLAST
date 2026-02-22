import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  benefit: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  serviceType: string;
  date: string;
  beforeImage: string;
  afterImage: string;
}
