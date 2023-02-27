import { delay } from 'roadhog-api-doc';

export default delay(
  {
    '/umi/goods': {
      success: true,
      errorCode: 'xx',
      errorMessage: 'ooo',
      showType: 1,
      traceId: 'i',
      data: [
        { id: 1, name: 'abc' },
        { id: 2, name: 'efg' },
      ],
    },
  },
  2000,
);
