export type MoveToElementInfo = {
  parentId: string;
  nodeId: string;
  targetIndex: number;
};

export const closest = (el: HTMLElement | null, selector: string) => {
  while (el) {
    if (el.matches(selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
};

export const getMoveToElementInfo = ($node: HTMLElement): MoveToElementInfo | null => {
  const $currentNode = $node;
  const parentNode = closest($node, '[data-type="parent"]');
  if (!parentNode?.children) {
    return null;
  }
  const findNodeIndex = [...parentNode.children].findIndex((child) => (child as HTMLElement).dataset.id === $currentNode.dataset.id);
  if (findNodeIndex !== -1) {
    return {
      parentId: parentNode.dataset.id,
      nodeId: $currentNode.dataset.id,
      targetIndex: findNodeIndex,
    } as MoveToElementInfo;
  }
  return null;
};
