"use client"
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import AddCommentIcon from '@mui/icons-material/AddComment';




const Page = () => {
    
   
    const [postdata, setPostdata] = useState([])
   


    const getAllPost= async()=>{
        const {data}=  await axios.get("https://fakestoreapi.com/products/")
        setPostdata(data)
    }
   
 

useEffect(() => {
      
  getAllPost()
      
    }, [])
    
  return <>


  {postdata.map(item=>  <Box>
 
 <Container maxWidth="lg">

 <Grid container  spacing={2} columns={12} sx={{marginTop:"20px"}}>
<Grid item sx={12} sm={12} md={6} >
    <Card sx={{backgroundColor:"Highlight", p:"10px", color:"white",   maxWidth: "90vh" }}> 
  <Typography  variant="h6"   component="div">
       {item.title}
        </Typography>
  <Box sx={{display:"flex" ,justifyContent:"space-between ",}}>

  <Box>
<CardContent>
        
        <Typography className="colorText" gutterBottom variant="h5" component="div">
      {item.name}
        </Typography>
 <Typography variant="body2"  component="div" sx={{marginTop:3}} >
   <img src={item.image} alt='image'  height={200} width={200} />
        </Typography>
      <Typography variant="body2"  component="div" sx={{marginTop:2}} >
        <Box sx={{display:"flex", justifyContent:"space-between", gap:1 }}>
          <ThumbUpIcon/>
          <ShareIcon/>
          <AddCommentIcon/>
         
        </Box>
        </Typography>

        
        
      </CardContent>
      </Box>

<Box sx={{marginTop:5}} >
      <Typography variant="p" >
  Description:- {item.description}
        </Typography>
        <Typography variant="h6" >
   category:- {item.category}
        </Typography>
      <Typography variant="h5" >
 price:- ₹ {item.price}
        </Typography>
      <Typography variant="h5" >
  Qty :- {item.rating.count}
        </Typography>
      <Typography variant="h6" component="div" >
 Reting:- {item.rating.rate} 
<StarIcon  sx={{color:"yellow"}}/>
<StarIcon  sx={{color:"yellow"}}/>
<StarIcon  sx={{color:"yellow"}}/>
        </Typography>
        <Typography>
        <Button variant='contained' sx={{margin:2}} color='success'    >Check Details</Button>
        </Typography>
     
        

      </Box>


      </Box>

    </Card>

  
</Grid>

</Grid>
        </Container> 
  </Box>)}


  </>
}

export default Page

