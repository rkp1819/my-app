export const initialNodes = [
  {
    id: "node-0",
    type: "start",
    position: { x: 401, y: 0 },
  },
  {
    id: "node-1",
    type: "form",
    position: { x: 350, y: 100 },
  },
  {
    id: "node-2",
    type: "questionnaire",
    position: { x: 350, y: 200 },
  },

  {
    id: "node-2a",
    type: "condition",
    position: { x: 393, y: 300 },
  },
  {
    id: "node-3",
    type: "summary",
    position: { x: 100, y: 400 },
    data: { title: "Collaborator Feedback_1" },
  },
  {
    id: "node-4",
    type: "summary",
    position: { x: 350, y: 400 },
    data: { title: "Collaborator Feedback_2" },
  },
  {
    id: "node-5",
    type: "summary",
    position: { x: 600, y: 400 },
    data: { title: "Collaborator Feedback_3" },
  },
];

export const initialEdges = [
  {
    id: "0->1",
    source: "node-0",
    target: "node-1",
    type: "smoothstep",
  },
  {
    id: "1->2",
    source: "node-1",
    target: "node-2",
    type: "smoothstep",
  },
  {
    id: "2->2a",
    source: "node-2",
    target: "node-2a",
    type: "smoothstep",
  },
  {
    id: "2a->3",
    source: "node-2a",
    target: "node-3",
    type: "smoothstep",
  },
  {
    id: "2a->4",
    source: "node-2a",
    target: "node-4",
    type: "smoothstep",
  },
  {
    id: "2a->5",
    source: "node-2a",
    target: "node-5",
    type: "smoothstep",
  },
];
