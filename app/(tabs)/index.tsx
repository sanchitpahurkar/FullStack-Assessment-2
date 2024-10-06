import type React from 'react';
import { useNavigation } from '@react-navigation/native'; 
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

// Define the array of shoes
const shoes = [
  {
    id: '1',
    name: 'Air Legging Sport',
    category: 'Apparel',
    price: '₹200.000',
    imageUrl: '../../assets/images/shoe1.png', // Replace with actual image path
  },
  {
    id: '2',
    name: 'Aero Sport Infinity Max',
    category: 'Footwear',
    price: '₹450.000',
    imageUrl: '../../assets/images/shoe2.png', // Replace with actual image path
  },
  {
    id: '3',
    name: 'Sport Runner Blue Edition',
    category: 'Footwear',
    price: '₹250.000',
    imageUrl: '../../assets/images/shoe3.png', // Replace with actual image path
  },
  {
    id: '4',
    name: 'Sport Bag',
    category: 'Bag',
    price: '₹350.000',
    imageUrl: '../../assets/images/shoe4.png', // Replace with actual image path
  },
];

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  // Render individual product item
  interface Shoe {
    id: string;
    name: string;
    category: string;
    price: string;
    imageUrl: string;
  }

  const renderProductItem = ({ item }: { item: Shoe }) => (
    <View style={styles.productItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <Text>{item.name}</Text>
      <Text style={styles.productCategory}>{item.category}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Search bar */}
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search Items" style={styles.searchInput} />
          <TouchableOpacity style={styles.searchButton}>
            <FontAwesome name="search" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Wallet balance and top-up */}
        <View style={styles.balanceContainer}>
          <View style={styles.balanceItem}>
            <Text style={styles.balanceLabel}>Wallet balance</Text>
            <Text style={styles.balanceAmount}>₹1,000,000</Text>
          </View>
          <View style={styles.topUpContainer}>
            <Text style={styles.balanceLabel}>Top up balance</Text>
            <TouchableOpacity style={styles.topUpButton}>
              <MaterialIcons name="payment" size={24} color="black" />
              <Text>Top up</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Banners */}
        <View style={styles.bannerContainer}>
          <Image source={{ uri: '../../assets/images/banner.png' }} style={styles.banner} />
        </View>

        {/* Shop by Category */}
        <Text style={styles.sectionTitle}>Shop by Category</Text>
        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryItem}>
            <Text>FOOTWEAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text>BAGS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text>APPAREL</Text>
          </TouchableOpacity>
        </View>

        {/* For You Section */}
        <Text style={styles.sectionTitle}>For You</Text>
        <FlatList
          data={shoes}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.productGrid}
        />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('')}>
          <FontAwesome name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('wishlist')}>
          <FontAwesome name="shopping-bag" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('notification')}>
          <FontAwesome name="user" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
  },
  searchButton: {
    backgroundColor: 'orange',
    padding: 12,
    borderRadius: 10,
    marginLeft: 10,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  balanceItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    justifyContent: 'center',
  },
  balanceLabel: {
    fontSize: 12,
    color: '#666',
  },
  balanceAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  topUpContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topUpButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  banner: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  categoryItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
  },
  productGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  productItem: {
    width: '47%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  productCategory: {
    fontSize: 12,
    color: '#666',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'orange',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    alignItems: 'center',
  },
});

export default HomeScreen;
