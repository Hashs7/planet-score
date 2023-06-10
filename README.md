# Planet score

Planet Score is conceived by scientists and experts concerned with the general interest, and supported by a broad civil society collective, Planet-score® is an independent and transparent methodology for the environmental labeling of foodstuffs. It mobilizes state databases (Agribalyse ADEME), and supplements them with complementary indicators to reflect all the issues, without taboos, without greenwashing, and with a high level of requirement, from the field to the plate. The Planet-score® includes impacts on the entire food life cycle: from production to packaging, energy and transport.

Learn more at [planet-score.org](https://www.planet-score.org)

This library offers a React component to display the score on your website.


## Run Locally

Clone the project

```bash
  git clone git@github.com:Hashs7/planet-score.git
```

Go to the project directory

```bash
  cd planet-score
```

Install dependencies

```bash
  yarn install
```

Start the playground website

```bash
  yarn run playground:dev
```


## Usage

```javascript
import { PlanetScore } from 'planet-score';

function App() {
  return <PlanetScore value="ABAC" />
}
```


## Available / Missing

Planet Score offer a score for various breeding animals but we found icon for only those animals :
- Pig
- Cow
- Chicken
- Sheep
- Goat

We are currently missing those animals :
- Bee
- Duck
- Rabbit
- Farming fish
- Fishing fish

If you find those icons, feel free to open a pull request or send me a message.


## Roadmap

- Add configuration for custom breeding animal names, breeding conditions and separator.
- Add components tests
- Publish to NPM
- Deploy playground website
