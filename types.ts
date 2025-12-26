
export interface ProjectIdea {
  title: string;
  description: string;
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface BuildState {
  isGenerating: boolean;
  currentIdea: ProjectIdea | null;
  history: ProjectIdea[];
}
