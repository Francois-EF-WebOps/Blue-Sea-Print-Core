import React from 'react';

export enum SectionId {
  OATH = 'oath',
  DOCTRINE = 'doctrine',
  NUTRITION = 'nutrition',
  TOOLS = 'tools',
  PRESERVATION = 'preservation',
  LEARNING = 'learning'
}

export interface ContentBlock {
  title?: string;
  content: string[]; // Array of paragraphs
  list?: string[]; // Optional bullet points
  warning?: string; // Optional warning box
}

export interface ManualSection {
  id: SectionId;
  title: string;
  description: string;
  blocks: ContentBlock[];
}

export interface NavItem {
  id: SectionId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}