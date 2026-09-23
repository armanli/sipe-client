import { Timeline } from './Timeline';
import { Revision } from './Revision';
import { Suggestion } from './Suggestion';

export interface Plan {
  id: number;
  title: string;
  status: string;
  timeline: Timeline;
  revisions: Revision[];
  aiPrompt: string | null;
  aiSuggestions: Suggestion[];
}
