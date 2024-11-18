import streamlit as st # type: ignore



# Define emission factors (example values, replace with accurate data)
EMISSION_FACTORS = {
    "Bangladesh": {
        "Transportation": 0.14,  # kgCO2/km
        "Electricity": 0.82,  # kgCO2/kWh
        "Diet": 1.25,  # kgCO2/meal, 2.5kgco2/kg
        "Waste": 0.1  # kgCO2/kg
    }
}

# Set wide layout and page name
st.set_page_config(layout="wide", page_title="Carbon Emission Calculator")

# Streamlit app code
st.title(":green[Carbon Emission Calculator Web Application]")

# User inputs
st.subheader(":green[Developed by :] :orange[Priyobrata Chowdhury] :sunglasses:")
st.subheader("🌍 :blue[Select Your Country]")
st.subheader("⚠️ :grey[_Only included Bangladesh yet in this website for the calculating carbon emissions. Others countries will be available soon._]")
country = st.selectbox("Select", ["Bangladesh"])

col1, col2 = st.columns(2)

with col1:
    st.subheader("🚗 :blue[Daily commute distance (in km)]")
    distance = st.slider("Distance", 0.0, 1000.0, key="distance_input")

    st.subheader("💡 :blue[Monthly electricity consumption (in kWh)]")
    electricity = st.slider("Electricity", 0.0, 1000.0, key="electricity_input")

with col2:
    st.subheader("🍽️ :blue[Waste generated per week (in kg)]")
    waste = st.slider("Waste", 0.0, 1000.0, key="waste_input")

    st.subheader("🍽️ :blue[Number of meals per day]")
    meals = st.number_input("Meals", 0, key="meals_input")

# Normalize inputs
if distance > 0:
    distance = distance * 365  # Convert daily distance to yearly
if electricity > 0:
    electricity = electricity * 12  # Convert monthly electricity to yearly
if meals > 0:
    meals = meals * 365  # Convert daily meals to yearly
if waste > 0:
    waste = waste * 52  # Convert weekly waste to yearly

# Calculate carbon emissions
transportation_emissions = EMISSION_FACTORS[country]["Transportation"] * distance
electricity_emissions = EMISSION_FACTORS[country]["Electricity"] * electricity
diet_emissions = EMISSION_FACTORS[country]["Diet"] * meals
waste_emissions = EMISSION_FACTORS[country]["Waste"] * waste

# Convert emissions to tonnes and round off to 2 decimal points
transportation_emissions = round(transportation_emissions / 1000, 2)
electricity_emissions = round(electricity_emissions / 1000, 2)
diet_emissions = round(diet_emissions / 1000, 2)
waste_emissions = round(waste_emissions / 1000, 2)

# Calculate total emissions
total_emissions = round(
    transportation_emissions + electricity_emissions + diet_emissions + waste_emissions, 2
)

if st.button(":orange[Calculate CO2 Emissions (Per year)]"):

    # Display results
    st.header("Results:")

    col3, col4 = st.columns(2)

    with col3:
        st.subheader("Carbon Emissions by Category")
        st.info(f"🚗 Transportation: {transportation_emissions} tonnes CO2 emissions per year.")
        st.info(f"💡 Electricity: {electricity_emissions} tonnes CO2 emissions per year.")
        st.info(f"🍽️ Diet: {diet_emissions} tonnes CO2 emissions per year.")
        st.info(f"🗑️ Waste: {waste_emissions} tonnes CO2 emissions per year.")

    with col4:
        st.subheader("Total Carbon Emissions Footprint")
        st.success(f"🌍 Your total carbon emission footprint is: {total_emissions} tonnes CO2 per year.")
        st.warning("CO2 emissions per capita in Bangladesh are equivalent to 0.65 tons per person (based on a population of 169,384,897 in 2022), an increase by 0.02 over the figure of 0.63 CO2 tons per person registered in 2021; this represents a change of 2.5% in CO2 emissions per capita.")


