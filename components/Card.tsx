import {
  Box,
  Button,
  Collapse,
  Flex,
  Heading,
  Icon,
  Text,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { IoPeopleCircle } from 'react-icons/io5';
import { IoTerminalSharp } from 'react-icons/io5';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { IoChevronDownSharp } from 'react-icons/io5';
import { IoChevronUpSharp } from 'react-icons/io5';
import { HiPhone } from 'react-icons/hi';

export default function Card(props: { data: string }) {
  const { isOpen, onToggle } = useDisclosure();
  const show = useBreakpointValue({ base: isOpen, md: true });
  const desktopDisplay = useBreakpointValue({ base: 'none', md: 'flex' });
  const mobileDisplay = useBreakpointValue({ base: 'flex', md: 'none' });
  const text = useBreakpointValue({ base: '16px', md: '14px' });
  return (
    <Box maxHeight={'70%'} overflow="auto">
      <Heading className="text-navy pb-2" fontSize="24px" lineHeight="31px">
        {props.data}
      </Heading>
      <Box>
        <Flex>
          <Icon className="fill-navy" as={IoLocationSharp} mt={1} />
          <Text ml={2} color="gray.600" fontSize={text} lineHeight="19px">
            Lus mus aenean justov vamus curabitu afusce litora.
          </Text>
        </Flex>
        <Flex mt={1}>
          <Icon className="fill-navy" as={IoPeopleCircle} mt={1} />
          <Text ml={2} color="gray.600" fontSize={text} lineHeight="19px">
            Cubilia torquent lacusnam ent .
          </Text>
        </Flex>
        <Flex display={desktopDisplay} mt={1}>
          <Icon className="fill-navy" as={IoTerminalSharp} mt={1} />
          <Text ml={2} color="gray.600" fontSize={text} lineHeight="19px">
            Uam orciduis rutrum.
          </Text>
        </Flex>
        <Flex mt={1}>
          <Icon className="fill-navy" as={HiPhone} mt={1} />
          <Text ml={2} color="gray.600" fontSize={text} lineHeight="19px">
            Per liquam eratquis justov.
          </Text>
        </Flex>
        <Flex display={mobileDisplay} mt={1}>
          <Icon className="fill-navy" as={IoTerminalSharp} mt={1} />
          <Text ml={2} color="gray.600" fontSize={text} lineHeight="19px">
            Uam orciduis rutrum.
          </Text>
        </Flex>
        <Collapse in={show} animateOpacity>
          <Flex mt={{ base: 1, md: 2 }}>
            <Icon color={'yellow.500'} as={IoCheckmarkSharp} mt={1} />
            <Text ml={2} color="gray.800" fontSize="16px" lineHeight="22px">
              Tesque lectuss ullamco pretiu quiscras.
            </Text>
          </Flex>
          <Flex mt={2}>
            <Icon color={'yellow.500'} as={IoCheckmarkSharp} mt={1} />
            <Text ml={2} color="gray.800" fontSize="16px" lineHeight="22px">
              Nislqu nibhcras duis aenean esque.
            </Text>
          </Flex>
          <Flex mt={2}>
            <Icon color={'yellow.500'} as={IoCheckmarkSharp} mt={1} />
            <Text ml={2} color="gray.800" fontSize="16px" lineHeight="22px">
              Ras duifusce noninte dolor placerat egetal.
            </Text>
          </Flex>
        </Collapse>
        <Flex cursor={'pointer'} display={mobileDisplay} onClick={onToggle} mt={5}>
          <Text ml={2} color="blue.500" fontSize="16px" lineHeight="22px">
            {isOpen ? 'See Less' : 'See More'}
            <Icon
              color={'blue.500'}
              as={isOpen ? IoChevronUpSharp : IoChevronDownSharp}
              p={1}
              ml={2}
            />
          </Text>
        </Flex>
      </Box>
      <Flex
        display={desktopDisplay}
        width="100%"
        flexWrap={'wrap'}
        position="absolute"
        bottom={'5%'}
        left={'10%'}
      >
        <button
           onClick={(e: any) => {
            console.log(e.target.outerText);
          }}
          className=" w-4/5 bg-navy px-6 py-3 h-12"
        >
          <Text
            color={'white'}
            fontSize="16px"
            lineHeight="22px"
            fontWeight="500"
            textTransform="uppercase"
          >
            enquiry
          </Text>
        </button>
        <button
          onClick={(e: any) => {
            console.log(e.target.outerText);
          }}
          className=" w-4/5 bg-white px-6  h-12 border-navy border mt-2"
        >
          <Text
            className=" text-navy"
            fontSize={{base:'10px',sm:'10px',xl:'16px'}}
            lineHeight={{base:'15px',xl:"22px"}}
            fontWeight="500"
            textTransform="uppercase"
          >
            360° Virtual Tour
          </Text>
        </button>
      </Flex>
    </Box>
  );
}
