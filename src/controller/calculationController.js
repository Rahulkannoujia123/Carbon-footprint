// controllers/calculationController.js
const axios = require('axios');

const calculateCarbonFootprint = async (req, res) => {
  try {
    console.log('🟢 Incoming Request:', req.body);

    const { travelDistance, transportMode } = req.body;

    // Validate inputs
    if (!travelDistance || !transportMode) {
      console.warn('⚠️ Missing inputs:', { travelDistance, transportMode });
      return res.status(400).json({ error: 'Missing travelDistance or transportMode' });
    }

    console.log('ℹ️ Calculating Carbon Footprint...');
    
    // Calculate carbon footprint (simple formula for now)
    const emissionFactor = transportMode === 'car' ? 0.12 : 0.05;
    const carbonFootprint = travelDistance * emissionFactor;

    console.log(`✅ Carbon Footprint Calculated: ${carbonFootprint.toFixed(2)} kg CO2`);

    // OpenAI API Call
    console.log('🔍 Fetching Recommendations from OpenAI...');
    const openaiResponse = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are an expert at providing carbon footprint reduction strategies.',
          },
          {
            role: 'user',
            content: `Suggest ways to reduce carbon footprint for traveling ${travelDistance} km by ${transportMode}.`,
          }
        ],
        max_tokens: 100,
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const recommendations = openaiResponse.data.choices[0].message.content.trim();
    console.log('✅ Recommendations Received:', recommendations);

    // Send response
    res.status(200).json({
      carbonFootprint: carbonFootprint.toFixed(2),
      recommendations,
    });

    console.log('🟢 Response Sent Successfully');

  } catch (error) {
    console.error('❌ OpenAI Error:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to fetch recommendations' });
  }
};

module.exports = { calculateCarbonFootprint };
