# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gospodarz', '0002_auto_20141113_2228'),
    ]

    operations = [
        migrations.AlterField(
            model_name='farmer',
            name='positionX',
            field=models.FloatField(null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='farmer',
            name='positionY',
            field=models.FloatField(null=True),
            preserve_default=True,
        ),
    ]
