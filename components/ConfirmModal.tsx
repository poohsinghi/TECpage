import {
  Text,
  Modal,
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
} from '@chakra-ui/react';

const ConfirmModal = (props: { show: boolean; context: any; handleClose: () => void }) => {
  return (
    <Modal
      size="xl"
      isOpen={props.show}
      onClose={props.handleClose}
      //   closeOnOverlayClick={false}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Submitted data</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Centre:{props.context.centre}</Text>
          <Text>Venue:{props.context.venue}</Text>
          <Text>Event Date:{props.context.eventDate}</Text>
          <Text>Event Time:{props.context.eventTime}</Text>
          <Text>{'> 1000 sqf.'}:{props.context['> 1000 sqf'] ? 'true':'false'}</Text>
          <Text>{'> 3000 sqf.'}:{props.context['> 3000 sqf'] ? 'true':'false'}</Text>
          <Text>LED Wall:{props.context.LEDWall ? 'true':'false'}</Text>
          <Text>PA System/ Microphones:{props.context.PASystemMicrophones ? 'true':'false'}</Text>
          <Text>Stage:{props.context.stage ? 'true':'false'}</Text>
          <Text>Full Name:{props.context.fullName}</Text>
          <Text>Phone number:{props.context.phoneNumber}</Text>
          <Text>Email:{props.context.email}</Text>
          <Text>Company:{props.context.company}</Text>
          <Text>Food & Beverage:{props.context.foodAndBeverage}</Text>
          <Text>Other requirements:{props.context.other}</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={props.handleClose}>
            OK
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmModal;
