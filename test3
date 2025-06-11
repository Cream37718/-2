#Import Libary

import torch
import torch.nn as nn
import torch.optim as optim
import torch.nn.functional as F
import torchvision.datasets as datasets
import torchvision.transforms as transforms
import torch.utils.data as DataLoader
import matplotlib.pyplot as plt
from torch.utils.data import DataLoader
from torch.nn import RNN as run

#MLP Network
class NN(nn.Module):
    def __init__(self, input_size, num_classes):
        super(NN, self).__init__()
        self.fc1 = nn.Linear(input_size, 50)
        self.fc2 = nn.Linear(50, 50)
        self.fc3 = nn.Linear(50, num_classes)
    def forward(self, x):
        x = F.relu(self.fc1(x))
        x = F.relu(self.fc2(x))
        x = self.fc3(x)
        return(x)

#Load Datasets
train_dataset = datasets.MNIST(root = 'dataset/', train = True, transform = transforms.ToTensor(), download = True)
valid_dataset = datasets.MNIST(root = 'dataset/', train = False, transform = transforms.ToTensor(), download = True) #test
train_loader = DataLoader(dataset = train_dataset, batch_size = 100, shuffle = True)
valid_loader = DataLoader(dataset = valid_dataset, batch_size = 100, shuffle = True)

image, labels = next(iter(train_loader))
print(f"Shape of image : {image.size()}")
print(f"Shape of label : {labels.size()}")
shape_image = image.shape
h, w = shape_image[-2], shape_image[-1]
print(image.shape[-1])
print(f"high: {h} px , width: {w} px")

# Hyperparameter tuning
num_classes = 10
input_size = h*w
learning_rate = 0.01
num_epoch = 20

#Initialize network
model = NN(input_size = input_size, num_classes = num_classes)

#loss and optimizer
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr = learning_rate)

#Training model
for epoch in range(num_epoch):
    for batch_idx, (data, targets) in enumerate(train_loader):
        data = data.reshape(data.shape[0], -1)

        # Forward 
        score = model(data)
        loss = criterion(score, targets)

        #Backward
        optimizer.zero_grad()
        loss.backward()

        optimizer.step()

# N_image = 5
# fig, ax = plt.subplots(1, N_image, figsize = (17, 7 ))
# for i in range(N_image):
#     im, label = train_dataset[i]
#     ax[i].imshow(im[0, :, :], cmap = 'gray', interpolation = 'bilinear')
#     ax[i].set_title(f"{train_dataset.classes[i]}")
# plt.show()