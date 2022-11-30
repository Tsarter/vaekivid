import "./PersonalityTraitsPage.css";
import PersonalityTraitsComponent from "../components/PersonalityTraitsComponent/PersonalityTraitsComponent";

export default function PersonalityTraitsPage() {
    return (
        <div className="PersonalityTraitsPage">
            isikuomadused
            <PersonalityTraitsComponent title="Vali enda isikuomadused"/>

        </div>
    );
}