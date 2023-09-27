import gapi from "./site_libs/google.api.js"

const CLIENT_ID = '<YOUR_CLIENT_ID>';
const API_KEY = '<YOUR_API_KEY>';

const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets.readonly'
]

async function main() {
    const response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1aPaHi5LJ1UB0terT4Tc0XuFE4IIYzjai6d5TM8rtWBQ',
        range: 'pickups!A2:E',
    });

    console.log(response)
}

main()