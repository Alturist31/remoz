/**
 * Remoz Replica Platform - Local Routing Logic Controller
 * Routes website inquiries directly to WhatsApp.
 */

// Define your target business mobile phone number here (with international country code, without + symbol)
// Replace 919876543210 with your actual business WhatsApp number
const WHATSAPP_BUSINESS_NUMBER = "917972319483"; 

// Initialize all layout attributes cleanly when the page context mounts
document.addEventListener("DOMContentLoaded", () => {
    console.log("Remoz interface tracking initiated.");
});

/**
 * Handle subscription card click interactions
 * @param {string} planType - Evaluates to 'weekly' or 'monthly' based on user choice
 */
// Setup master dictionary tracking all 14 plans from the platform image
const REMOZ_PLANS_DATABANK = {
    1: { name: "High Protein Chicken Plan", price: "₹7,560", details: "24 Meals | P: 75-80g, C: 30-35g, F: 6-7g" },
    2: { name: "High Protein Veg Salad Plan", price: "₹6,299", details: "24 Meals | P: 50-55g, C: 60-70g, F: 10-15g" },
    3: { name: "High Protein Egg Salad Plan", price: "₹6,552", details: "24 Meals | P: 15-20g, C: 20-25g, F: 2-3g" },
    4: { name: "High Protein Hybrid Plan", price: "₹7,260", details: "24 Meals | P: 55-60g, C: 35-40g, F: 8-10g" },
    5: { name: "Veg Salad Standard Plan", price: "₹5,800", details: "24 Meals | P: 40-45g, C: 50-60g, F: 12-15g" },
    6: { name: "Egg Salad Standard Plan", price: "₹6,000", details: "24 Meals | P: 10-12g, C: 20-25g, F: 2-3g" },
    7: { name: "Hybrid Salad Balance Plan", price: "₹7,260", details: "24 Meals | Protein: 70g, Carbs: 18g, Fat: 10g" },
    8: { name: "Regular Protein Salad - Veg Spl Offer", price: "₹5,800", details: "24 Meals | P: 40-45g, C: 50-60g, F: 20-25g" },
    9: { name: "Trial - Veg Protein Salad Box", price: "₹299", details: "1 Meal Trial | P: 20-58g, C: 24-69g" },
    13: { name: "Premium Fruits Bowl Mix (300g)", price: "₹2800", details: "24 Deliveries Daily Fruit Assortment" }
};

/**
 * Handle subscription card click actions for all catalog sets
 * @param {number} planId - The numerical unique key linking back to the databank configurations
 */
function selectRemozPlan(planId) {
    const selectedPlan = REMOZ_PLANS_DATABANK[planId];
    
    if (!selectedPlan) {
        alert("Selected plan data format could not be verified locally.");
        return;
    }

    // Formulate pristine message strings to dispatch straight into business terminals
    const textMessage = 
`Hello Remoz Team!  

I would like to know more about:
 *Plan Name:* ${selectedPlan.name}
 *Price:* ${selectedPlan.price}
 *Macros Info:* ${selectedPlan.details}

Please check my delivery coverage zone and guide me with checkout instructions!`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodedMessage}`;
    
    console.log(`Forwarding order request packet for plan key [${planId}] straight to WhatsApp.`);
    window.open(whatsappUrl, '_blank');
}

/**
 * Intercept Brochure Form Submission Events and route them to WhatsApp
 */
const leadFormElement = document.getElementById('leadForm');
if (leadFormElement) {
    leadFormElement.addEventListener('submit', (event) => {
        // Stop the default browser page reload behavior
        event.preventDefault();

        // Extract parameters safely from input controls
        const clientName = document.getElementById('formName').value.trim();
        const clientPhone = document.getElementById('formPhone').value.trim();
        const clientDiet = document.getElementById('formDiet').value;

        // Construct a clean, structured message layout for your sales inbox
        const textMessage = 
`New Brochure Request from Website! 
----------------------------------
 *Name:* ${clientName}
 *Phone:* ${clientPhone}
 *Diet Preference:* ${clientDiet}
----------------------------------
Please send me the latest Remoz healthy meal menu brochure.`;

        // Encode message safely for URL transmission
        const encodedMessage = encodeURIComponent(textMessage);
        const whatsappUrl = `https://wa.me/917972319483?text=${encodedMessage}`;

        console.log("Routing structured lead information package to WhatsApp.");
        
        // Open the pre-filled message chat directly
        window.open(whatsappUrl, '_blank');
        
        // Reset inputs cleanly
        leadFormElement.reset();
    });
}
