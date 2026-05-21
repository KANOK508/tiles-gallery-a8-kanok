"use client";
import { authClient } from "@/lib/auth-client";
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { FaEdit, FaSave } from 'react-icons/fa'

const UpdateUser = () => {

  const handelEditProfile=async(e)=>{
   e.preventDefault()
   const name = e.target.name.value;
   const image = e.target.image.value;
   await authClient.updateUser({
    image: image,
    name: name,
})
  }
  return (
     <Modal>
      <Button variant="secondary"><FaEdit></FaEdit>Edit Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaEdit></FaEdit>
              </Modal.Icon>
              
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handelEditProfile} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  
                  <TextField className="w-full" name="image" type="text">
                    <Label>Photo-url(link)</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  
                  

                  <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit"><FaSave></FaSave> Save</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  )
}

export default UpdateUser