import React from 'react';
import Arts from "../../../../../assets/images/Arts & Culture.png"
import Concerts from "../../../../../assets/images/Concerts.png"
import Cruises from "../../../../../assets/images/Cruises.png"
import Desert from "../../../../../assets/images/Desert Camping.png"
import Esports from "../../../../../assets/images/Esports.png"
import Experiences from "../../../../../assets/images/Experiences.png"
import Family from "../../../../../assets/images/Family Entertainment.png"
import Festivals from "../../../../../assets/images/Festivals.png"
import Heritage from "../../../../../assets/images/Heritage Sites.png"
import Performance from "../../../../../assets/images/Live Performance.png"
import Museum from "../../../../../assets/images/Museum.png"
import Zoo from "../../../../../assets/images/Zoo.png"
import Parks from "../../../../../assets/images/Parks.png"
import Theater from "../../../../../assets/images/Theater.png"
import Sun from "../../../../../assets/images/Sun.png"
import Sports from "../../../../../assets/images/Sports.png"
import Restaurants from "../../../../../assets/images/Restaurants.png"

interface InterestItem {
    icon: string;
    text: string;
}

const interests: InterestItem[] = [
    { icon: Arts, text: 'Arts & Culture' },
    { icon: Concerts, text: 'Concerts' },
    { icon: Cruises, text: 'Cruises' },
    { icon: Desert, text: 'Desert Camping' },
    { icon: Esports, text: 'Esports' },
    { icon: Experiences, text: 'Experiences' },
    { icon: Family, text: 'Family Entertainment' },
    { icon: Festivals, text: 'Festivals' },
    { icon: Heritage, text: 'Heritage Sites' },
    { icon: Performance, text: 'Live Performance' },
    { icon: Museum, text: 'Museum' },
    { icon: Restaurants, text: 'Restaurants & Café' },
    { icon: Sports, text: 'Sports' },
    { icon: Sun, text: 'Sun & Sea' },
    { icon: Theater, text: 'Theater' },
    { icon: Parks, text: 'Theme Parks' },
    { icon: Zoo, text: 'Zoo' }

];

interface InterestProps {
    selectedInterests: string[];
    setSelectedInterests: React.Dispatch<React.SetStateAction<string[]>>;
}

const Interest: React.FC<InterestProps> = ({ selectedInterests, setSelectedInterests }) => {

    const handleSelection = (text: string) => {
        if (selectedInterests.includes(text)) {
            setSelectedInterests(selectedInterests.filter(item => item !== text));
        } else {
            setSelectedInterests([...selectedInterests, text]);
        }
    };

    return (
        <div className="d-flex flex-wrap gap-3 interest" >
            {interests.map((interest, index) => (
                <div
                    key={index}
                    className={`rounded-pill d-flex align-items-center gap-2 p-2 pe-4 border ${selectedInterests.includes(interest.text) ? 'selected' : ''}`}
                    style={{
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '500',
                        backgroundColor: selectedInterests.includes(interest.text) ? '#f48337' : 'transparent',
                        borderColor: '#FFFFFF',
                        height: 'fit-content', 
                        marginBottom: index === interests.length - 1 ? '36px' : '0',  
                    }}
                    onClick={() => handleSelection(interest.text)}
                >
                    <img src={interest.icon} width={20} height={20} />
                    <span>{interest.text}</span>
                </div>
            ))}
        </div>
    );
};

export default Interest;
