import { HStack, VStack } from '@ui/components/common';
import { BaseButton } from '@ui/components/button';
import styleToken from '@ui/core/styleToken.css';
import { Textarea } from '@ui/components/input';

const BoardItemCreate = () => (
  <VStack marginTop={styleToken.space[2]}>
    <Textarea name="content" value="" onChange={() => {}} placeholder="내용을 입력해주세요." />
    <HStack marginTop={styleToken.space[2]}>
      <BaseButton onClick={() => {}} color="default">
        취소
      </BaseButton>
      <BaseButton onClick={() => {}} color="primary">
        저장
      </BaseButton>
    </HStack>
  </VStack>
);

export default BoardItemCreate;
