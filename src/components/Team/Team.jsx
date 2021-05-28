import React from "react";
import "./Team.css";
import TeamCard from "../TeamCard/TeamCard";
function Team() {
  return (
    <div className="team_container" id="team">
      <div className="team_header">
        <h3>My Team</h3>
      </div>
      <div className="team_body">
        <TeamCard
          name="Simmy JK"
          img="https://m.economictimes.com/thumb/msid-64577495,width-1200,height-900,resizemode-4,imgsize-155653/dhivya_linkdin.jpg"
        />
        <TeamCard name="Rahul Roy" img="https://jooinn.com/images/men-4.jpg" />
        <TeamCard
          name="Mook Franandis"
          img="https://i.pinimg.com/originals/8a/6e/9c/8a6e9c20393cf96a1955bdc3741fa5ac.jpg"
        />
        <TeamCard
          name="Ayan Kumar"
          img="https://ath2.unileverservices.com/wp-content/uploads/sites/8/2018/01/pinoy-haircut-pompadour-1024x891.jpg"
        />
        <TeamCard
          name="Ronny Garg"
          img="https://www.forbesindia.com/media/wpower2020/ankiti%20bose.jpg"
        />
      </div>
    </div>
  );
}

export default Team;
