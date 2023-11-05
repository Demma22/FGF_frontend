import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextInput, Text, Title, Group, Grid } from "@mantine/core";

import { Layout } from "../Layout"


export default function CultureForm () {  
    const [clan_name, setClanName] = useState("");
    const [clan_seat, setClanSeat] = useState("");
    const [totem, setTotem] = useState(""); 
    const [secondary_totem, setSecondTotem] = useState("")
    const [clan_history, setClanHist] = useState(""); 
    const [clan_leader_title, setClanLeadTitle] = useState("");
    const [clan_leader_name, setClanLeadName] = useState("");
    const [cultural_sites, setCulturalSites] = useState("");
    const [male_names, setMaleNames] = useState("");
    const [female_names, setFemaleNames] = useState("");
    const [reserved_male_names, setReservMaleNames] = useState("");
    const [reserved_female_names, setReservFemaleNames] = useState("");
    const [taboos, setTaboos] = useState("");
    const [lead_god, setLeadGod] = useState("");    
    const [other_gods, setOtherGods] = useState("");
    const [kingdom_name, setKingdName]  = useState(""); 
    const [title_of_leader, setTitleOfLead] = useState(""); 
    const [current_king, setCurrentKing] =  useState("");
    const [current_chief_name, setCurrentChiefName] =  useState("");
    const [number_of_clans, setNumOfClans] =  useState("");
    const [ethnicity_name, setEthnicName] =  useState("");
    const [region_in_uganda, setRegionInUganda] =  useState("");
    const [language, setLanguage] =  useState("");
    const [food, setFood] =  useState("");
    const [staple_food, setStapleFood] =  useState("");
    const [cuisine, setCuisine] =  useState("");
    const [cashcrop, setCashCrop] =  useState("");
    const [universal_worship, setUniverWorship] =  useState("");
    const [denominations, setDenominations] =  useState("");
    const [universal_rituals, setUniverRituals] =  useState("");
    const [ceremonies, setCeremonies] =  useState("");
    const [Kingdom, setKingdom] =  useState("");
    const [chiefdom, setChiefdom] =  useState("");
    const [ethnic_group_name, setEthnGroupName] =  useState("");
    const [number_of_ethnicities, setNumOfEthnicities] =  useState("");
    const [number_of_languages, setNumbOfLanguages] =  useState("");
    const [number_of_kingdoms, setNumbOfKingdoms] =  useState("");
    const [ethnic_group, setEthnicGroup] =  useState("");




    
    const [notes, setNotes] = useState("");
    const [contributor_name, setContribName] = useState("");
    const [citation, setCitation] = useState("");
    const [date_entered, setDateEntered] = useState("");


    
    /*state = {
        // Initially, no file is selected
        image: null
    };
     state = {
        // Initially, no file is selected
        video: null
    };
    state = {
        // Initially, no file is selected
        audio: null
    }; */

    const navigate = useNavigate();
      const handleSubmit = async (event) => {
        event.preventDefault();
        // Clear the form inputs
               
        setClanName('');
        setClanSeat('');
        setTotem(''); 
        setSecondTotem('');
        setClanHist(''); 
        setClanLeadTitle('');
        setClanLeadName('');
        setCulturalSites('');
        setMaleNames('');
        setFemaleNames('');
        setReservMaleNames('');
        setReservFemaleNames('');
        setTaboos('');
        setLeadGod('');    
        setOtherGods('');
        setKingdName(''); 
        setTitleOfLead(''); 
        setCurrentKing('');
        setCurrentChiefName('');
        setNumOfClans('');
        setEthnicName('');
        setRegionInUganda('');
        setLanguage('');
        setFood('');
        setStapleFood('');
        setCuisine('');
        setCashCrop('');
        setUniverWorship('');
        setDenominations('');
        setUniverRituals('');
        setCeremonies('');
        setKingdom('');
        setChiefdom('');
        setEthnGroupName('');
        setNumOfEthnicities('');
        setNumbOfLanguages('');
        setNumbOfKingdoms('');
        setEthnicGroup('');
        setNotes('');
        setContribName('');
        setCitation('');
        setDateEntered('');

      
        try {
          const response = await axios.post('https://fgf-app.onrender.com/cultures/', {

            clan_name: clan_name,
            clan_seat: clan_seat, 
            totem: totem,
            secondary_totem: secondary_totem,
            clan_history: clan_history, 
            clan_leader_title: clan_leader_title, 
            clan_leader_name: clan_leader_name,
            cultural_sites: cultural_sites,
            male_names: male_names, 
            female_names: female_names,
            reserved_male_names: reserved_male_names,
            reserved_female_names: reserved_female_names,
            taboos: taboos,
            lead_god: lead_god,    
            other_gods: other_gods,
            kingdom_name: kingdom_name, 
            title_of_leader: title_of_leader, 
            current_king: current_king,
            current_chief_name: current_chief_name,
            number_of_clans: number_of_clans,
            ethnicity_name: ethnicity_name,
            region_in_uganda: region_in_uganda,
            language: language, 
            food: food,
            staple_food: staple_food,
            cuisine: cuisine,
            cashcrop: cashcrop, 
            universal_worship: universal_worship,
            denominations: denominations,
            universal_rituals: universal_rituals,
            ceremonies: ceremonies,
            Kingdom: Kingdom,
            chiefdom: chiefdom,
            ethnic_group_name: ethnic_group_name, 
            number_of_ethnicities: number_of_ethnicities,
            number_of_languages: number_of_languages, 
            number_of_kingdoms: number_of_kingdoms,
            ethnic_group: ethnic_group,
            notes: notes, 
            contributor_name: contributor_name, 
            citation: citation,
            date_entered: date_entered,

          });
  
          if (response.ok) {
            navigate("/Layout")
          }else{
            console.error('Error Submitting details');
            navigate("/Culture")
          }
  
          
        } catch (error) {
          console.error('Error logging in:', error);
        }
      }

  return (
    <Layout>
        <Title order={3} ta="center"> CULTURE FORM</Title>
           
        <Grid columns={24}>
            <Grid.Col span={22}>  
                <form onSubmit={handleSubmit}>
                    <div>
                        <TextInput
                        label="Clan Name"
                        value={clan_name}
                        onChange={(event) => setClanName(event.target.value)}
                        description="Enter Name of Clan"
                        error="*"
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Clan Seat"
                        value={clan_seat}
                        onChange={(event) => setClanSeat(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Totem"
                        value={totem}
                        onChange={(event) => setTotem(event.target.value)}
                        description="Enter Totem of the Clan"
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Secondary Totem"
                        value={secondary_totem}
                        onChange={(event) => setSecondTotem(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Clan History"
                        value={clan_history}
                        onChange={(event) => setClanHist(event.target.value)}
                        error="*"
                        />
                    </div>

                    <div>
                        <TextInput
                        label="Title of the Clan Leader"
                        value={clan_leader_title}
                        onChange={(event) => setClanLeadTitle(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Name of the Clan Leader"
                        value={clan_leader_name}
                        onChange={(event) => setClanLeadName(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Cultural Sites"
                        value={cultural_sites}
                        onChange={(event) => setCulturalSites(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Male Names"
                        value={male_names}
                        onChange={(event) => setMaleNames(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Female Names"
                        value={female_names}
                        onChange={(event) => setFemaleNames(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Reserved Male Names"
                        value={reserved_male_names}
                        onChange={(event) => setReservMaleNames(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Reserved Female Names"
                        value={reserved_female_names}
                        onChange={(event) => setReservFemaleNames(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Taboos"
                        value={taboos}
                        onChange={(event) => setTaboos(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Lead god"
                        value={lead_god}
                        onChange={(event) => setLeadGod(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Other gods"
                        value={other_gods}
                        onChange={(event) => setOtherGods(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Kingdom Name"
                        value={kingdom_name}
                        onChange={(event) => setKingdName(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Title of the Leader"
                        value={title_of_leader}
                        onChange={(event) => setTitleOfLead(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Current King"
                        value={current_king}
                        onChange={(event) => setCurrentKing(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Current Name of the Chief"
                        value={current_chief_name}
                        onChange={(event) => setCurrentChiefName(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Number of Clans"
                        value={number_of_clans}
                        onChange={(event) => setNumOfClans(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Ethnicity Name"
                        value={ethnicity_name}
                        onChange={(event) => setEthnicName(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Region In Uganda"
                        value={region_in_uganda}
                        onChange={(event) => setRegionInUganda(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Language"
                        value={language}
                        onChange={(event) => setLanguage(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Food"
                        value={food}
                        onChange={(event) => setFood(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Staple Food"
                        value={staple_food}
                        onChange={(event) => setStapleFood(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Cuisine"
                        value={cuisine}
                        onChange={(event) => setCuisine(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Cashcrop"
                        value={cashcrop}
                        onChange={(event) => setCashCrop(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Universal Worship"
                        value={universal_worship}
                        onChange={(event) => setUniverWorship(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Denominations"
                        value={denominations}
                        onChange={(event) => setDenominations(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Universal Rituals"
                        value={universal_rituals}
                        onChange={(event) => setUniverRituals(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Ceremonies"
                        value={ceremonies}
                        onChange={(event) => setCeremonies(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Kingdom"
                        value={Kingdom}
                        onChange={(event) => setKingdom(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Chiefdom"
                        value={chiefdom}
                        onChange={(event) => setChiefdom(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Ethnic Group Name"
                        value={ethnic_group_name}
                        onChange={(event) => setEthnGroupName(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Number of Ethnicities"
                        value={number_of_ethnicities}
                        onChange={(event) => setNumOfEthnicities(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Number of Languages"
                        value={number_of_languages}
                        onChange={(event) => setNumbOfLanguages(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Number of Kingdoms"
                        value={number_of_kingdoms}
                        onChange={(event) => setNumbOfKingdoms(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Ethnic Group"
                        value={ethnic_group}
                        onChange={(event) => setEthnicGroup(event.target.value)}
                        
                        />
                    </div>
                    
                    <div>
                        {/* Handle Images Here and other File uploads*/}
                    </div>
                   



                    <div>
                        <TextInput
                        label="Notes"
                        value={notes}
                        onChange={(event) => setNotes(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Contributor Name"
                        value={contributor_name}
                        onChange={(event) => setContribName(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Citation"
                        value={citation}
                        onChange={(event) => setCitation(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Date Entered"
                        value={date_entered}
                        onChange={(event) => setDateEntered(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <Button color="lime.6" type='' variant="filled" radius="md"> Submit </Button>
                    </div>
                    </form>
                </Grid.Col>
            </Grid>
      
    </Layout>
    
 )
 }