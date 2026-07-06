import "./App.css";

import team from "./data/team";

import Section from './components/section/section';
import Card from "./components/Card/Card";
import TeamMember from "./components/team-member/TeamMember";

function App() {
  const onFollow = (name) => {
    console.log(`${name} followed`);
  };

  return (
    <div className="App">
      <Section title="Team Profile Directory">
        {team.map((member) => (
          <Card
            key={member.id}
            title={member.name}
            onFollow={onFollow}
          >
            {(onFollow) => (
              <TeamMember
                name={member.name}
                role={member.role}
                age={member.age}
                isAdmin={member.isAdmin}
                skills={member.skills}
                address={member.address}
                onFollow={onFollow}
              />
            )}
          </Card>
        ))}
      </Section>
    </div>
  );
}

export default App;