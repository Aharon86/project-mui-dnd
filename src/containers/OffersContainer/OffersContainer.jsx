import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Grid } from "@material-ui/core";
import Header from "../../components/Header/Header";
import ImgMediaCard from "../../components/ImgMediaCard/ImgMediaCard";
import style from "./OffersContainer.module.scss";
import { offersData } from "../../helpers/offersData";

const OffersContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setData(offersData);

    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  const handleOnDragEnd = (result) => {
    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setData(items);
  };

  const addCards = (data) => {
    return data.map((item, index) => (
      <Draggable key={item.id} draggableId={item.id} index={index}>
        {(provided) => (
          <Grid
            item
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <ImgMediaCard info={item} loading={loading} />
          </Grid>
        )}
      </Draggable>
    ));
  };

  return (
    <>
      <Header title="Offers" />
      <main className={style.main}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <Grid
                container
                justify="space-around"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {data.length ? addCards(data) : null}
                {provided.placeholder}
              </Grid>
            )}
          </Droppable>
        </DragDropContext>
      </main>
    </>
  );
};

export default OffersContainer;
