// components/Map.js
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const Map = ({ onCountryClick }) => {
  return (
    <ComposableMap>
      <Geographies geography="/path/to/southeast-asia-topojson.json">
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onClick={() => onCountryClick(geo.properties.NAME)}
              style={{
                default: { fill: "#D6D6DA" },
                hover: { fill: "#F53" },
                pressed: { fill: "#E42" },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default Map;
