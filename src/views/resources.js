import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Linking,FlatList, TouchableHighlight} from "react-native";
import { SimplePanel } from '../components/panel';
import { List } from 'react-native-paper';
import SortableListView from 'react-native-sortable-listview'
import ActionBar from 'react-native-action-bar';


let data = {
  1: { text: 'Resources for Women', link: 'https://www.empowerwomen.org/en/resources'},
  2: { text: 'Resources for College Students', link: 'https://elearningindustry.com/online-resources-college-students'},
  3: { text: 'Resources for LGBTQ+ Folks', link: 'https://www.glaad.org/resourcelist' },
  4: { text: 'Resources for Depression', link: 'https://nndc.org/resource-links/' },
  5: { text: 'Resources for Anxiety', link: 'https://www.everydayhealth.com/anxiety/guide/resources/'},
  6: { text: 'Resources for Veterans', link: 'https://www.dav.org/veterans/resources/'  },
  7: { text: 'Resources for Differently Abled', link: 'https://www.samhsa.gov/dbhis-collections/persons-with-disabilities' },
  8: { text: 'Resources for Ideation', link: 'https://suicidepreventionlifeline.org'  },
  9: { text: 'Resources for Self Harm', link: 'https://www.crisistextline.org/selfharm' },
  10: { text: 'Resources for Men', link: 'https://mankindprojectjournal.org/mens-resources/'  },
  11: { text: 'Resources for Young Adults', link: 'https://www.adolescenthealth.org/Resources/Clinical-Care-Resources/Mental-Health/Mental-Health-Resources-For-Adolesc.aspx' },
  12: { text: 'Resources for Teenagers', link: 'https://www.adolescenthealth.org/Resources/Clinical-Care-Resources/Mental-Health/Mental-Health-Resources-For-Adolesc.aspx' },
  13: { text:  'Resources for  Adults', link: '' },

}

let order = Object.keys(data) //Array of keys



class RowComponent extends React.Component {
  render() {
    return (
      <TouchableHighlight
        underlayColor={'#eee'}
        style={{
          padding: 25,
          backgroundColor: '#F8F8F8',
          borderBottomWidth: 1,
          borderColor: '#eee',
        }}
        {...this.props.sortHandlers}
      >
        <Text style={styles.textStyle} onPress = {()=> Linking.openURL(this.props.data.link)} >{this.props.data.text}</Text>
      </TouchableHighlight>
    )
  }
}
class ResourcesView extends Component {

    constructor(props) {
        super(props);

        this.props.viewController.updateHeader("resources for u");
    }


    render() {
          return (
               <>
                  <ActionBar style={styles.label}
                       backgroundColor={'#3B373C'}
                       onLeftPress={this.handleLeftAction}
                       title={'Press & Hold to Sort Resources'}
                    />

                  <SortableListView
                    style={{ flex: 1 }}
                    data={data}
                    order={order}
                    onRowMoved={e => {
                      order.splice(e.to, 0, order.splice(e.from, 1)[0])
                      this.forceUpdate()
                    }}
                    renderRow={row => <RowComponent data={row} />}
                  />
              </>
            )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16,
       fontWeight: 'bold',
    },
    resourceBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
                                 
    },
    label:{
        width: 30,
    }
})

export {ResourcesView};


