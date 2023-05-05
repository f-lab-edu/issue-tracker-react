import { PageHeader, PageLayout, PageBody } from '@ui/components/layout';
import { Board } from '@ui/components/board';
import { HStack } from '@ui/components/common';
import BoardColumnCreate from '@ui/components/board/BoardColumnCreate.tsx';

const MainPage = () => (
  <PageLayout>
    <PageHeader />
    <PageBody>
      <HStack>
        <Board title="할 일" items={[]} />
        <BoardColumnCreate onClick={() => {}} />
      </HStack>
    </PageBody>
  </PageLayout>
);

export default MainPage;
