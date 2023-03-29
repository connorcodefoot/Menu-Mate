import React from "react";
import AdminMenuItem from "./MenuItem/index";
import AddMenuModal from './AdminAddMenu';
import axios from "axios";
import { useEffect, useState } from "react";
import { Context, useContext } from '../../Context/index';
import { Accordion, Button, Modal } from "react-bootstrap";
import MenuList from "../User/MenuList";
// import 'components/User/UserMenu.scss';
import 'components/Admin/AdminMenu.scss';

export default function AdminMenu() {
  // SET STATES
  const [showAddModal, setShowAddModal] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [menus, setMenus] = useState();
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [title, setTitle] = useState("");

  const { state } = useContext(Context);

  // LOAD DEFAULT PAGE
  useEffect(() => {

    Promise.all([
      axios.get('/api/user/menus'),
    ])
      .then((all) => {
        setMenus(all[0].data.menus);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div> LOADING </div>;
  }

  const handleMenuClick = (menuId) => {
    setActiveMenuId(menuId);
  };

  const handleClick = () => {
    setShowAddModal(true);
  };

  const handleAddSave = (addedMenu) => {
    // save the edited item to backend or state
    console.log('Added menu:', addedMenu);
    setTitle(addedMenu.title);
  };

  const handleAddClose = () => {
    setShowAddModal(false);
  };

  // RETURN MENU

  return (
    <>
      <Accordion>
        {menus.map((menu) => (
          <Accordion.Item
            eventKey={menu.id}
            key={menu.id}
          >
            <Accordion.Header className="my-acc-header">
              <MenuList
                className="my-acc-header"
                id={menu.id}
                title={menu.title}
                // state={state.cart}
                onClick={() => handleMenuClick(menu.id)}
              />
            </Accordion.Header>
            <Accordion.Body>
              <AdminMenuItem menuID={menu.id} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <Modal
        show={activeMenuId !== null}
        onHide={() => setActiveMenuId(null)}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {menus.find((menu) => menu.id === activeMenuId)?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AdminMenuItem menuID={activeMenuId} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setActiveMenuId(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <button variant="secondary" id="new-menu-button" onClick={handleClick} >
        New Menu Category
      </button>
      {showAddModal && (
        <AddMenuModal
          menu={{
            title
          }}
          onSave={handleAddSave}
          onClose={handleAddClose}
          onUpdateTitle={setTitle}
        />
      )}
    </>
  );
};