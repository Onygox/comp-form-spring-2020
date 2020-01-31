//list of tiles
ArrayList<tile> tiles = new ArrayList<tile>();

//list to hold the possible values
IntList values = new IntList();

//current position in the deck
int position = 0;

void setup() {
  
  size(800,800);
   
  //create and shuffle the deck
  for(int i = 0; i < 10; i++) {
    values.append((int)random(100));
  }
  values.shuffle();
 
  //create and display the tiles from the tile() class
  for(int i = 0; i < 8; i++) {
    for(int j = 0; j < 8; j++) {
      tiles.add(new tile(i*100,j*100,100));
    }
  }
  for (int i = 0; i < tiles.size(); i++) {
   tiles.get(i).display(); 
  }
}

//this part is from the compform website notes
int valueFromDeck() {
    // find the value at the current position in the deck
    int v = values.get(position);

    // change the position for next time
    position++;

    // if we run out of "cards", shuffle and start over from the top
    if (position == values.size()) {
        values.shuffle();
        position = 0;
    }

    // return the value
    return v;
}
