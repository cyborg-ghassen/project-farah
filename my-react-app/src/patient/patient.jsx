import React from "react";
import {
  Breadcrumb,
  Button,
  Layout,
  Menu,
  theme,
  Form,
  Input,
  Row,
  Col,
  Checkbox,
  Collapse,
  Divider,
} from "antd";
import Table from "../components/table";
import Navbar from "../components/Navbar";

const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
       <Navbar/>
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Patient et Demander</Breadcrumb.Item>
          <Breadcrumb.Item>Nouveau(elle) Patient et Demander</Breadcrumb.Item>
        </Breadcrumb>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "16px 0",
            background: "#f0f2f5",
          }}
        >
          <h2 style={{ margin: 0 }}>Nouveau(elle) Patient et Demande</h2>
          <div>
            <Button style={{ marginRight: 8 }}>Pré-visualiser</Button>
            <Button type="primary">Sauvegarder</Button>
          </div>
        </div>

        <div
          style={{
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Form layout="vertical">
            <Collapse defaultActiveKey={["1"]}>
              <Collapse.Panel
                header={
                  <span style={{ fontWeight: "bold" }}>
                    Information générale
                  </span>
                }
                key="1"
              >
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item label="Prénom du patient" name="prenom">
                      <Input placeholder="Entrer le prénom" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Nom du patient" name="nom">
                      <Input placeholder="Entrer le nom" />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Sexe" name="sexe">
                      <Input placeholder="Sexe" />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Âge" name="age">
                      <Input type="number" placeholder="Âge" />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Taille (estimée) CM" name="taille">
                      <Input type="number" placeholder="Taille en cm" />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Poids (estimé) KG" name="poids">
                      <Input type="number" placeholder="Poids en kg" />
                    </Form.Item>
                  </Col>
                </Row>
              </Collapse.Panel>

              <Collapse.Panel
                header={<span style={{ fontWeight: "bold" }}>Terrain</span>}
                key="2"
              >
                <Form.Item
                  label="Quel est le motif de votre demande ?"
                  labelCol={{ style: { fontWeight: "bold" } }}
                >
                  <Checkbox.Group>
                    <Row>
                      <Col span={24}>
                        <Checkbox value="aide_diag">
                          On demande une aide au diag
                        </Checkbox>
                      </Col>
                      <Col span={24}>
                        <Checkbox value="aide_therapeutique">
                          On demande une aide thérapeutique
                        </Checkbox>
                      </Col>
                      <Col span={24}>
                        <Checkbox value="transfert">
                          On demande un transfert à votre service
                        </Checkbox>
                      </Col>
                      <Col span={24}>
                        <Checkbox value="conseil_prevention">
                          On demande un conseil de prévention/vaccination
                        </Checkbox>
                      </Col>
                      <Col span={24}>
                        <Checkbox value="autre">Autre (à préciser...)</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </Form.Item>

                <Divider />

                <Form.Item
                  label="Est-ce que votre patient présente l’un des facteurs de risque de BMR suivant ?"
                  labelCol={{ style: { fontWeight: "bold" } }}
                >
                  <Checkbox.Group>
                    <Row>
                      <Col span={24}>
                        <Checkbox value="contact_structure_soins">
                          Votre patient a été en contact avec une structure de
                          soins dans les 6 mois précédents ? (hôpital,
                          dispensaire…)
                        </Checkbox>
                      </Col>
                      <Col span={24}>
                        <Checkbox value="patient2">Votre patient 2</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </Form.Item>

                <Divider />

                <Form.Item
                  label="Est-ce que votre patient a une allergie connue ?"
                  labelCol={{ style: { fontWeight: "bold" } }}
                >
                  <Row gutter={24}>
                    <Col span={4}>
                      <Checkbox value="allergie_oui">Oui</Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value="allergie_non">Non</Checkbox>
                    </Col>
                  </Row>
                </Form.Item>

                <Divider />

                <Form.Item
                  label="Quelle était la sévérité de cet épisode allergique ?"
                  labelCol={{ style: { fontWeight: "bold" } }}
                >
                  <Row gutter={24}>
                    <Col span={4}>
                      <Checkbox value="mineur">Mineur</Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value="majeur">Majeur</Checkbox>
                    </Col>
                  </Row>
                </Form.Item>

                <Divider />

                <Form.Item
                  label="Votre patient présente-t-il un ou plusieurs des facteurs d’immunodépression suivants ?"
                  labelCol={{ style: { fontWeight: "bold" } }}
                >
                  <Checkbox.Group>
                    <Row>
                      <Col span={24}>
                        <Checkbox value="corticotherapie">
                          Corticothérapie &gt; 15 jours
                        </Checkbox>
                      </Col>
                      <Col span={24}>
                        <Checkbox value="biographie">Biographie</Checkbox>
                      </Col>
                      <Col span={24}>
                        <Checkbox value="immunosuppresseurs">
                          Immunosuppresseurs
                        </Checkbox>
                      </Col>
                      <Col span={24}>
                        <Checkbox value="hemodialyse">
                          Insuffisance rénale au stade d’hémodialyse
                        </Checkbox>
                      </Col>
                      <Col span={24}>
                        <Checkbox value="cirrhose">
                          Insuffisance hépatique (Cirrhose)
                        </Checkbox>
                      </Col>
                      <Col span={24}>
                        <Checkbox value="splenectomie">Splénectomie</Checkbox>
                      </Col>
                      <Col span={24}>
                        <Checkbox value="vih">Infection à VIH</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </Form.Item>

                <Divider />

                <Form.Item
                  label="Antécédents pathologiques ?"
                  labelCol={{ style: { fontWeight: "bold" } }}
                >
                  <Row gutter={24}>
                    <Col span={4}>
                      <Checkbox value="antecedents_oui">Oui</Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value="antecedents_non">Non</Checkbox>
                    </Col>
                    <Divider />
                    <Col span={4}>
                      <Checkbox value="diabete">Diabète</Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value="hta">HTA</Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value="coronaropathie">Coronaropathie</Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value="bpco">BPCO</Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value="autre">Autre (À préciser...)</Checkbox>
                    </Col>
                  </Row>
                </Form.Item>

                <Form.Item
                  label="Antécédents pathologique"
                  labelCol={{ style: { fontWeight: "bold" } }}
                >
                  <Input.TextArea
                    rows={10}
                    placeholder="Détaillez ici les antécédents..."
                  />
                </Form.Item>
              </Collapse.Panel>

              <Collapse.Panel
                header={
                  <span style={{ fontWeight: "bold" }}>Examen Clinique</span>
                }
                key="3"
              >
                <Form.Item
                  label="Fièvre ?"
                  labelCol={{ style: { fontWeight: "bold" } }}
                >
                  <Row gutter={24}>
                    <Col span={4}>
                      <Checkbox value="fievre_oui">Oui</Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value="fievre_non">Non</Checkbox>
                    </Col>
                  </Row>
                </Form.Item>

                <Divider />

                <Form.Item
                  label="Hypotension artérielle ?"
                  labelCol={{ style: { fontWeight: "bold" } }}
                >
                  <Row gutter={24}>
                    <Col span={4}>
                      <Checkbox value="hypo_oui">Oui</Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value="hypo_non">Non</Checkbox>
                    </Col>
                  </Row>
                </Form.Item>
                <Divider />

                <Form.Item
                  label="Écrire les données pertinentes de l'examen physique"
                  labelCol={{ style: { fontWeight: "bold" } }}
                >
                  <Input.TextArea
                    rows={10}
                    placeholder="Détails de l'examen physique..."
                  />
                </Form.Item>

                <Divider />

                <Form.Item
                  label="Présence d’un matériel étranger ?"
                  labelCol={{ style: { fontWeight: "bold" } }}
                >
                  <Row gutter={24}>
                    <Col span={4}>
                      <Checkbox value="materiel_oui">Oui</Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value="materiel_non">Non</Checkbox>
                    </Col>
                  </Row>
                </Form.Item>

                <Divider />
                <Form.Item
                  label="Présence d’un matériel étranger"
                  labelCol={{ style: { fontWeight: "bold" } }}
                >
                  <Table></Table>
                </Form.Item>
                <Divider />

                <Form.Item
                  label="Image (Photo de plaie, lésion cutanée, Erysipèle)"
                  labelCol={{ style: { fontWeight: "bold" } }}
                >
                  <Button>Attacher</Button>
                </Form.Item>
              </Collapse.Panel>
            </Collapse>
          </Form>
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        ©{new Date().getFullYear()} Created by Farah Bdioui
      </Footer>
    </Layout>
  );
};

export default App;
