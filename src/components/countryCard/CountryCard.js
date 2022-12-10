import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CountryCard(country) {
  const props = country.country
  const name = props.name.common
  const capital = props.capital
  const region = props.region
  const subRegion = props.subregion
  const latlng = props.latlng
  const population = props.population
  const independent = props.independent
  const area = props.area
  const unMember = props.unMember
  const fifa = props.fifa
  const startOfWeek = props.startOfWeek
  const capitalLatLng = props.capitalInfo.latlng
  const coatOfArms = props.coatOfArms.svg
  const officialName = props.name.official
  const flag = props.flags.svg
  const gglMap = props.maps.googleMaps


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = React.useCallback(() => {
    setExpanded(!expanded);
  },[expanded]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title= {name}
        subheader={capital}
      />
      <CardMedia
        component="img"
        height="194"
        image={flag}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          The country belongs to {region} region and {subRegion} sub-region.
          Located at the {latlng[0]} °N and {latlng[1]} °W, this country has population of {population}
          and it {independent ? "has" : "has not"} gained the independent.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link to="..">
          <IconButton aria-label="go to homepage">
              <ArrowBackIosIcon />
          </IconButton>
        </Link>
        <IconButton aria-label="location" onClick={(e)=> {
          e.preventDefault()
          window.open(gglMap,"_blank")
        }}>
          <LocationOnIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Other information</Typography>
          <Typography paragraph>
            {name} has official name of {officialName}, having area up to {area}. Its capital locates at {capitalLatLng[0]} °N and {capitalLatLng[1]} °W.
            Also, {name} has the coat of arms
          </Typography>
          <CardMedia
            component="img"
            alt="coat of arms"
            height="auto"
            image={coatOfArms}
            style={{marginBottom: '20px'}}
            />
          <Typography paragraph>
            Side information
          </Typography>
          <Typography paragraph>
            {name} {unMember ? "is" : "is not"} a member of UN, having fifa short of {fifa}, and starts the week on {startOfWeek}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
