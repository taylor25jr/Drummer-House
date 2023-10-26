import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import "./Prices.css"

export default function PricingCards() {
  return (
    <Box
      sx={{
        width: '100%',
        justifyItems:'center',
        alignContent:'center',
        gap: 2,
        gridAutoFlow: 'column',
      }}
      className='box'
    >
      <Card size="sm" variant="outlined" className='priceCard'>
        <Chip size="sm" variant="outlined" color="neutral">
          BASIC
        </Chip>
        <Typography level="h2">Nacionales</Typography>
        <Divider inset="none" />
        <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Clase: $40.000
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Clase mensual: $120.000
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Clase mensual x2: $200.000
          </ListItem>
        </List>
        <Divider inset="none" />
        <CardActions>
          <Button
            variant="soft"
            color="neutral"
            endDecorator={<KeyboardArrowRight />}
          >
            Start now
          </Button>
        </CardActions>
      </Card>
      <Card
        size="sm"
        variant="solid"
        color="neutral"
        invertedColors
        sx={{ bgcolor: 'neutral.900', border:'1px solid #fff'}}
        className='priceCard'
      >
        <Chip size="sm" variant="outlined">
          MOST POPULAR
        </Chip>
        <Typography level="h3">Internacionales</Typography>
        <Divider inset="none" />
        <List
          size="sm"
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            mx: 'calc(-1 * var(--ListItem-paddingX))',
          }}
        >
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Clase: $20 USD
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Clase mensual: $50 USD
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Clase mensual x2: $280 USD
          </ListItem>
        </List>
        <Divider inset="none" />
        <CardActions>
          <Button endDecorator={<KeyboardArrowRight />}>Start now</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
