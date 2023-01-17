import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { onOpen, isOpen, onClose } = useDisclosure()
  const [currentUrl, setCurrentUrl] = useState('')

  function handleViewImage(url: string) {
    onOpen();
    setCurrentUrl(url);
  }

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {
          cards.map((data) =>
            <Card data={data} viewImage={() => handleViewImage(data.url)} />
          )
        }
      </SimpleGrid>
      <ModalViewImage
        isOpen={isOpen}
        imgUrl={currentUrl}
        onClose={onClose}
      />
    </>
  );
}
