import { test, expect, request } from '@playwright/test';

test('first API test', async ({ request }) => {

    // declare a variable to store base URL
    const apiurlbase = `https://reqres.in`;

    // perform the GET request using the Base URL
    const response = await request.get(`${apiurlbase}/api/users?page=2`);

    //assertion for check if status is 200OK
    expect(response.status()).toBe(200);

    // fetching all the text from the API response into a variable called 'text'
    const text = await response.text();

    //assertion to validate if variable 'text' contains any specific data
    expect(text).toContain('Michael');

    // printing the respone in JSON format
    console.log(await response.json());

});

test('API POST REQUEST', async ({ request }) => {

    const apiurlbase = `https://reqres.in`;
    const response = await request.post(`${apiurlbase}/api/users`, {
        data: {
            "name": "Jigar",
            "job": "Jobless",
        }
    });
    expect(response.status()).toBe(201);
    const result = await response.text();
    expect(result).toContain("Jigar");
    console.log(await response.json());

});