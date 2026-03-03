export default async function handler(req, res) {
    try {
        const response = await fetch(
            'https://gamma-api.polymarket.com/markets?limit=100&active=true&closed=false'
        );
        
        const data = await response.json();
        
        console.log('Active markets found:', data);
        res.status(200).json(data);
    } catch (err) {
        console.error('Error:', err);
    }
}