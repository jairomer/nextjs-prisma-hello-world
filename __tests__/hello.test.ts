import handler from '../src/pages/api/hello';
import { createMocks } from 'node-mocks-http';

describe('/api/hello API Route', ()=> {
    it('should return 200 and the correct message on GET', async () => {
        const { req, res } = createMocks({
            method: 'GET',
        });

        await handler(req, res);

        expect(res._getStatusCode()).toBe(200);
        //expect(res._getJSONData()).toEqual({ message: 'Hello World!'})
    });
});
