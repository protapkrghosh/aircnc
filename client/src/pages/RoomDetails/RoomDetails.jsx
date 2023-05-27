import Header from "../../components/Rooms/Header";
import RoomInfo from "../../components/Rooms/RoomInfo";
import Container from "../../components/Shared/Container/Container";

const RoomDetails = () => {
   return (
      <Container>
         <div className="max-w-screen-lg mx-auto">
            <div className="flex flex-col gap-6">
               <Header />
               <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
                  <RoomInfo />
                  <div>Reservation</div>
               </div>
            </div>
         </div>
      </Container>
   );
};

export default RoomDetails;